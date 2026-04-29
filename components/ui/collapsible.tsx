'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function Collapsiblcinemantent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Collapsiblcinemantent>) {
  return (
    <CollapsiblePrimitive.Collapsiblcinemantent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, Collapsiblcinemantent }
