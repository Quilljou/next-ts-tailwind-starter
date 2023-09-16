'use client'
import React, { ReactNode } from 'react'
import { LocaleSwitcher } from '../locale-switcher'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

interface IProps {
  leftNode?: ReactNode
}
export function Header(props: IProps) {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 px-4 py-4 md:px-12">
      <a href="/" className="text-xs md:text-base">
        Next TS Tailwind Starter
      </a>
      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <Button size={'icon'} asChild className="rounded-full">
          <a href="https://github.com/Quilljou/next-ts-tailwind-starter" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button>
      </div>
    </div>
  )
}
