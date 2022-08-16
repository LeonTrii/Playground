import java.util.Arrays;

public class BoardTester {

	public static void main(String[] args) {
		char[][] board = {
				{'O', 'X', 'O'},
				{'X', 'O', 'O'},
				{'O', 'X', 'X'}
		};
		
		Board b1 = new Board(board);
		b1.setPlayerSymbol('X', 0, 2);
		b1.printBoard();
		b1.checkWin();
	}

}
