import { forwardRef, useState } from 'react'
import copyToClipboard from '../../Hooks/copyToClipboard'
import './output-card.css'


export const OutputCard = forwardRef(({link}, ref) => {
  const [copiedLink, setCopiedLink] = useState([]);

  const linkID = link.code;
  const linkText = link.full_short_link;

  const { isCopied, copyItem } = copyToClipboard(linkID, linkText, copiedLink, setCopiedLink);
  
  
  if (!link) return null;

  return (
    <div className='outputCard-wrapper'>
      <div className="initial-URL">
        <span>{link.original_link}</span>
      </div>

      <div className="shortened-url">
        <span>{link.full_short_link}</span>
      </div>

      <div className="copy-btn">
        <button
          ref={ref}
          type='button'
          onClick={copyItem}
          iscopied={isCopied ? 1 : 0}
          style={isCopied ? {background: 'hsl(257, 27%, 26%)'} : null}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
});

