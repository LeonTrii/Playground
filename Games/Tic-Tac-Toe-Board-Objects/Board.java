import java.util.ArrayList;
import java.util.Arrays;

public class Board { //This is the default board. Used n for null.
	private char[][] board = {
			{'n', 'n', 'n'},
			{'n', 'n', 'n'},
			{'n', 'n', 'n'}
	};
	
	private int[][] winCombos = {
     {0, 1, 2},
     {3, 4, 5},
     {6, 7, 8},
     {0, 3, 6},
     {1, 4, 7},
     {2, 5, 8},
     {0, 4, 8},
     {6, 4, 2},
	};
	
	private boolean checkDupe(int target, ArrayList<Integer> list) {
		ArrayList<Integer> check = list;
		for (int i = 0; i < check.size(); i++) {
			if (target == check.get(i)) {
				return false;
			}
		}
		return true;
	}
	
	public Board(char[][] board) {
		this.board = board;
	}
	
	public void printBoard() {
		for (char[] k: board) {
			System.out.println(Arrays.toString(k));
		}
	}
	
	public void setPlayerSymbol(char symbol, int row, int column) {
		board[row][column] = symbol;
	}
	
	public void checkWin() {
		int tie = 0;
		ArrayList<Integer> xCount = new ArrayList<Integer>();
		ArrayList<Integer> oCount = new ArrayList<Integer>();
		ArrayList<Integer> xLocations = new ArrayList<Integer>();
		ArrayList<Integer> oLocations = new ArrayList<Integer>();
		for (int k = 0; k < board.length; k++) {
			for (int h = 0; h < board[k].length; h++) {
				if (board[k][h] == 'X') {
					tie++; 
					xLocations.add(k * 3 + h);
				} else if (board[k][h] == 'O') {
					tie++;
					oLocations.add(k * 3 + h);
				}
			}
		}
		
		for (int g: xLocations) {
			for (int m = 0; m < winCombos.length; m++) {
				for (int r = 0; r < winCombos[m].length; r++) {
					if (g == winCombos[m][r] && checkDupe(g, xCount)) {
						xCount.add(g);
					}
				}
			}
		}
		
		for (int g: oLocations) {
			for (int m = 0; m < winCombos.length; m++) {
				for (int r = 0; r < winCombos[m].length; r++) {
					if (g == winCombos[m][r] && checkDupe(g, oCount)) {
						oCount.add(g);
					}
				}
			}
		}
		
		boolean xWon = false;
		boolean oWon = false;
		int y = 0;
		while (y < winCombos.length) {
			for (int u = 0; u < oCount.size() - 2; u++) {
				if (oCount.get(u) == winCombos[y][0] && oCount.get(u + 1) == winCombos[y][1] && oCount.get(u + 2) == winCombos[y][2]) {
					System.out.println("Player O won");
					oWon = true;
				}
			}
			y++;
		}
		
		y = 0;
		while (y < winCombos.length) {
			for (int u = 0; u < xCount.size() - 2; u++) {
				if (xCount.get(u) == winCombos[y][0] && xCount.get(u + 1) == winCombos[y][1] && xCount.get(u + 2) == winCombos[y][2]) {
					System.out.println("Player X won");
					xWon = true;
				}
			}
			y++;
		}
		
		if (tie == 9 && xWon == false && oWon == false) {
			System.out.println("This is a tie");
		}
	}
}
