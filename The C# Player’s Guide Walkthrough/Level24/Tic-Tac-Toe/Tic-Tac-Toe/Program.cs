Board b1 = new Board();

class Board {
    private string GameBoard { get; set; }
    private char[,] board = new char[3, 3] {
        {' ', ' ', ' '},
        { ' ', ' ', ' '},
        { ' ', ' ', ' '}
    };

    private bool InRange(int x, int y) => x <= 3 && x >= 1 && y <= 3 && y >= 1;

    private void RenderBoard() {
        GameBoard = $@"
         {board[0, 0]} | {board[0, 1]} | {board[0, 2]}
        ---+---+---
         {board[1, 0]} | {board[1, 1]} | {board[1, 2]}
        ---+---+---
         {board[2, 0]} | {board[2, 1]} | {board[2, 2]} ";
    }

    private bool CheckWin(string turn) {
        string checkRow = "";
        string checkCol = "";

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                checkRow += board[i, j];
                checkCol += board[j, i];
            }
            if (checkRow.Contains(turn) || checkCol.Contains(turn)) {
                return true;
            } else {
                checkRow = "";
                checkCol = "";
            }
        }

        string firstDiagonal = Convert.ToString(board[0, 0]) + Convert.ToString(board[1, 1]) + Convert.ToString(board[2, 2]);
        string secondDiagonal = Convert.ToString(board[2, 0]) + Convert.ToString(board[1, 1]) + Convert.ToString(board[0, 2]);

        return firstDiagonal.Contains(turn) || secondDiagonal.Contains(turn);
    }

    private bool GameEnd(char turn, int count) {
        string turnToCheck = Convert.ToString(turn) + Convert.ToString(turn) + Convert.ToString(turn);

        if (CheckWin(turnToCheck)) {
            Console.WriteLine($"The {turn} player has won.");
            Console.WriteLine(GameBoard);

            return true;
        } else if (count == 9) {
            Console.WriteLine("This game is a draw");
            Console.WriteLine("---------------------------");
            Console.WriteLine(GameBoard);

            return true;
        }

        return false;
    }

    private void Play() {
        bool xTurn = false;
        int count = 0;

        while (true) {
            xTurn = !xTurn;
            char turn = xTurn ? 'X' : 'O';

            Console.WriteLine($"It is {turn}'s turn.");
            Console.WriteLine(GameBoard);

            Console.Write("Enter X coordinate: ");
            int xCord = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Y coordinate: ");
            int yCord = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("---------------------------");

            if (!InRange(xCord, yCord)) {
                xTurn = !xTurn;
                Console.WriteLine("These coordinates are out of range. Try again.");
            } else if (board[yCord - 1, xCord - 1] == ' ') {
                board[yCord - 1, xCord - 1] = turn;
                RenderBoard();

                count++;

                if (GameEnd(turn, count)) {
                    break;
                }

            } else {
                xTurn = !xTurn;
                Console.WriteLine("That box is already taken. Try again.");
            }
        }
    }

    public Board() {
        RenderBoard();
        Play();
    }
}