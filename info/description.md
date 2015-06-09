You are given a rhyme (a multiline string), in which lines are separated by "newline" (\n).
Casing does not matter for your search, but whitespaces should be removed beforehand.
You should find the word inside the rhyme in the horizontal (from left to right) or vertical (from up to down) lines.
For this you need envision the rhyme as a matrix (2D array).
Find the coordinates of the word in the cut rhyme (without whitespaces).

The result must be represented as a list -- **[row_start,column_start,row_end,column_end]**, where

- **row_start** is the line number for the first letter of the word.
- **column_start** is the column number for the first letter of the word.
- **row_end** is the line number for the last letter of the word.
- **column_end** is the line number for the last letter of the word.
- Counting of the rows and columns start from 1.
