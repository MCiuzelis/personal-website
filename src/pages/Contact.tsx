import React, { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(5, { message: 'Please enter at least 5 characters' }),
  webhook: z.string().url({ message: 'Enter a valid URL' }).optional().or(z.literal('')),
})

export default function Contact() {
  const [scrollOffset, setScrollOffset] = useState(0)
  const [savedWebhook, setSavedWebhook] = useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem('zapierWebhook') || '' : ''
  )

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', message: '', webhook: savedWebhook },
    mode: 'onTouched',
  })

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // SEO
  useEffect(() => {
    const title = 'Contact'
    document.title = title
    const desc = 'Send a message via the contact form.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = window.location.origin + '/contact'
  }, [])

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const webhookUrl = (values.webhook || savedWebhook).trim()

    if (!webhookUrl) {
      toast({
        title: 'Webhook not set',
        description: 'Add your Zapier webhook URL to receive messages.',
        variant: 'destructive',
      })
      return
    }

    try {
      // Save webhook if provided/changed
      if (values.webhook !== undefined && values.webhook !== savedWebhook) {
        localStorage.setItem('zapierWebhook', values.webhook || '')
        setSavedWebhook(values.webhook || '')
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          email: values.email,
          message: values.message,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin + '/contact',
        }),
      })

      toast({
        title: 'Message sent',
        description: 'Your message was sent. Check your Zap history to confirm delivery.',
      })
      form.reset({ email: '', message: '', webhook: savedWebhook })
    } catch (err) {
      console.error('Contact submit error:', err)
      toast({ title: 'Error', description: 'Failed to send message.', variant: 'destructive' })
    }
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#000' }}>
      <Navigation scrollOffset={scrollOffset} pageType="other" />

      <header className="bg-black px-8 pt-20">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="section-heading text-white mb-8">Contact</h1>
          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            Send me a message and I will get back to you by email.
          </p>
        </div>
      </header>

      <main className="bg-black px-8 pb-20">
        <div className="max-w-screen-md mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <section className="rounded-xl p-6" style={{ backgroundColor: '#101010' }}>
                <h2 className="sr-only">Your email</h2>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              <section className="rounded-xl p-6" style={{ backgroundColor: '#101010' }}>
                <h2 className="sr-only">Your message</h2>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your message</FormLabel>
                      <FormControl>
                        <Textarea rows={8} placeholder="Write your message here..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              <section className="rounded-xl p-6" style={{ backgroundColor: '#0b0b0b' }}>
                <FormField
                  control={form.control}
                  name="webhook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Zapier Webhook URL (owner only)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://hooks.zapier.com/hooks/catch/..." {...field} />
                      </FormControl>
                      <p className="text-xs text-muted-foreground">Saved locally in your browser. Used to deliver form submissions to your inbox via Zapier.</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              <div className="flex justify-end">
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  )
}
