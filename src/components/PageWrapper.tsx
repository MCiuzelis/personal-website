// components/PageWrapper.tsx
import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
    initial:  { opacity: 0 },
    animate:  { opacity: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
    exit:     { opacity: 0, transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] } },
}

export function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1
            }}
        >
            {children}
        </motion.div>
    )
}
