import Component from '@ember/component';

export default Component.extend({
		squares: Array(9).fill(null),
		xIsNext: true,
		firstName: '',
		lastName: '',
		fullName: Ember.computed('firstName','lastName', function() {
      return `${this.firstName} ${this.lastName}`;
		}),
		statusString: 'Next player: X',
		calculateWinner: function(squares) {
			const lines = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];
			for (let i = 0; i < lines.length; i++) {
				const [a, b, c] = lines[i];
				if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
					return squares[a];
				}
			}
			return null;
		},
		generateResult(){
			const winner = this.calculateWinner(this.squares);
			if (winner) {
				this.set("statusString", 'Winner: ' + winner);
			} else {
				this.set("statusString", 'Next player: ' + (this.xIsNext ? 'X' : 'O'));
			}
		},
    actions: {
			handleClick(i) {
				const newSquares = this.squares.slice();
				if (this.calculateWinner(this.squares) || this.squares[i]) {
					return;
				}
				newSquares[i] = this.xIsNext ? 'X' : 'O';
				this.set('squares', newSquares);
				this.xIsNext = !this.xIsNext;
				this.generateResult();
			}
    }
});
