import { useState, useEffect } from 'react'


const copyToClipboard = (itemID, textToCopy, copiedItems, setCopiedItems) => {
  const [isCopied, setIsCopied] = useState(false);


  const copyItem = () => {
    setCopiedItems(copiedItems => [...copiedItems, itemID])
    navigator.clipboard.writeText(textToCopy)
  }

  useEffect(() => {
    if (copiedItems.includes(itemID)) {
      setIsCopied(true)
    }
  }, [copiedItems, itemID])

  return {isCopied, copyItem}
}

export default copyToClipboard