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
import { Github } from 'lucide-react'

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(5, { message: 'Please enter at least 5 characters' }),
})

export default function Contact() {
  const [scrollOffset, setScrollOffset] = useState(0)
  const [isSending, setIsSending] = useState(false)
  const [dotCount, setDotCount] = useState(0)

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', message: '' },
    mode: 'onTouched',
  })

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setScrollOffset(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // SEO setup
  useEffect(() => {
    const title = 'Contact'
    document.title = title
    const desc = 'Send a message via the contact form.'
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = desc

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = window.location.origin + '/contact'
  }, [])

  // Dot animation loop
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isSending) {
      interval = setInterval(() => {
        setDotCount((prev) => (prev >= 3 ? 0 : prev + 1))
      }, 500)
    } else {
      setDotCount(0)
    }
    return () => clearInterval(interval)
  }, [isSending])

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const webhookUrl = "https://script.google.com/macros/s/AKfycbyxWVRHZlolwU0WbXAaEnV7P_uJKDmr2lPAkf4Fyx5gmvkRNd8_QX3gB1808G_KflkY5w/exec"

    setIsSending(true)
    try {
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
        description: 'Your message was sent successfully.',
      })
      form.reset()
    } catch (err) {
      console.error('Contact submit error:', err)
      toast({ title: 'Error', description: 'Failed to send message.', variant: 'destructive' })
    } finally {
      setIsSending(false)
    }
  }

  return (
      <div className="relative min-h-screen" style={{ backgroundColor: '#000' }}>
        <Navigation scrollOffset={scrollOffset} pageType="contact" />

        <header className="bg-black px-8 pt-20">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="section-heading text-white mb-8">Contact</h1>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 mt-4">
              If I managed to make this website as a mechanical engineer, I should be able to answer your questions.
            </p>
          </div>
        </header>

        <main className="bg-black px-8 pb-20">
          <div className="max-w-screen-md mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <section className="rounded-xl p-6 animate-enter" style={{ backgroundColor: '#101010' }}>
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

                <section className="rounded-xl p-6 animate-enter" style={{ backgroundColor: '#101010' }}>
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

                <div className="flex justify-end animate-enter">
                  <Button type="submit" disabled={isSending}>
                    {isSending ? (
                        <>
                          Sending
                          <span style={{ display: 'inline-block', width: '1.5em', textAlign: 'left' }}>{'.'.repeat(dotCount)}</span>
                        </>
                    ) : (
                        'Send message'
                    )}
                  </Button>
                </div>

              </form>
            </Form>
          </div>

        </main>
      </div>
  )
}