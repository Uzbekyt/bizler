import React from 'react'
import '../styles/button.scss'
import { arrow } from '../assets'

const Button = ({buttonText, width}) => {
  return (
	<div className='button-container'>
		<button class="button">
			<div class={`circle ${width}`}></div>
			<span class="button-text">
				{buttonText}
				<img src={arrow} className='arrow' />
			</span>
		</button>
 	</div>
  )
}

export default Button

