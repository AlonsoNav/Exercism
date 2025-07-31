
class ConnectGame:
    def __init__(self, board):
        self.board = [row.lstrip().split() for row in board.split('\n')]

    def get_winner(self):
        # Check for O
        for i, char in enumerate(self.board[0]):
            if char == 'O' and self._is_winner((0, i), 'O', [(0, i)]):
                return 'O'
        
        # Check for X
        for i, row in enumerate(self.board):
            if row[0] == 'X' and self._is_winner((i, 0), 'X', [(i, 0)]):
                return 'X'
        
        return ''

    
    def _is_winner(self, current_pos, player, visited):
        if player == 'O' and current_pos[0] == len(self.board) - 1 or player == 'X' and current_pos[1] == len(self.board[0]) - 1:
            return True

        directions = [
            (-1, 0),
            (-1, 1),
            (0, 1),
            (0, -1),
            (1, -1),
            (1, 0)
        ]

        for direction in directions:
            new_pos = (current_pos[0] + direction[0], current_pos[1] + direction[1])
            if new_pos not in visited and -1 < new_pos[0] < len(self.board) and -1 < new_pos[1] < len(self.board[0]) and self.board[new_pos[0]][new_pos[1]] == player and self._is_winner(new_pos, player, visited + [new_pos]):
                return True
        
        return False
