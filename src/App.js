import './scss/style.scss';
import { useState } from 'react';

function App() {
	console.log('호출됨');
	const arr = ['red', 'green', 'blue'];
	const [Colors, setColors] = useState(arr);
	const [Change, setChange] = useState('변경전');

	return (
		<div className='wrap'>
			<button onClick={() => setChange('변경후')}>{Change}</button>

			<button
				onClick={() => {
					//전개연산자로 기존 Colors state에 담겨있는 배열값을 Deep Copy한 다음 변경
					//불변성이 유지된 상태에서 state값이 변경되었으므로 해당 컴포넌트가 재호출되며 재랜더링됨
					const newColors = [...Colors];
					newColors[0] = 'hotpink';
					setColors(newColors);
				}}
			>
				색상변경
			</button>
			<ul>
				{Colors.map((color, idx) => {
					return (
						<li key={idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
