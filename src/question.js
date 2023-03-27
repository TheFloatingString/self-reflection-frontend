import Rating from '@mui/material/Rating';



export default function Question({ question }) {
	return(

			<div>
				<label>{question}</label>
				<p></p>
				<Rating
						max={7}
				/>
				<p></p>
			</div>


		);
}