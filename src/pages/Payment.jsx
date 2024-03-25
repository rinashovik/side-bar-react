import React from 'react'

export default function Payment() {
  return (
    <div className='bg-yellow-700'>Payment Method
        
        <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
  <svg fill="currentColor">
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>
<label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
  <svg fill="currentColor">
  </svg>
  Apple Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label> <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
  <svg fill="currentColor">
  </svg>
  Credit Card
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>
        
        </div>
  )
}
