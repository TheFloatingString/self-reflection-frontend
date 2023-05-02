import Rating from '@mui/material/Rating';



export default function Question({ question, questionIdentifier }) {
	return(

			<div>
				<label>{question}</label>
				<p></p>
				<Rating
						name={questionIdentifier}
						max={7}
				/>
				<p></p>
			</div>


		);
}