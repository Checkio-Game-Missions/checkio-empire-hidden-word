"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": ["""DREAMING of apples on a wall,
And dreaming often, dear,
I dreamed that, if I counted all,
-How many would appear?""", "ten"],
            "answer": [2, 14, 2, 16],
        },
        {
            "input": ["""He took his vorpal sword in hand:
Long time the manxome foe he sought--
So rested he by the Tumtum tree,
And stood awhile in thought.
And as in uffish thought he stood,
The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
And burbled as it came!""", "noir"],
            "answer": [4, 16, 7, 16],
        }
    ],
    "Extra": [
        {
            "input": ["""Twas brillig, and the slithy toves
Did gyre and gimble in the wabe;
All mimsy were the borogoves,
And the mome raths outgrabe.""", "them"],
            "answer": [4, 4, 4, 7],
        },
        {
            "input": ["""Twas brillig, and the slithy toves
Did gyre and gimble in the wabe;
All mimsy were the borogoves,
And the mome raths outgrabe.""", "stog"],
            "answer": [1, 19, 4, 19],
        },
        {
            "input": ["""One, two! One, two! And through and through
The vorpal blade went snicker-snack!
He left it dead, and with its head
He went galumphing back.""", "back"],
            "answer": [4, 17, 4, 20],
        },
        {
            "input": ["""And hast thou slain the Jabberwock?
Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!'
He chortled in his joy.
'Twas brillig, and the slithy toves
Did gyre and gimble in the wabe;
All mimsy were the borogoves,
And the mome raths outgrabe.'""", "tomy"],
            "answer": [2, 5, 2, 8],
        },
        {
            "input": ["""Humpty Dumpty sat on a wall:
Humpty Dumpty had a great fall.
All the King's horses and all the King's men
Couldn't put Humpty Dumpty in his place again.""", "oast"],
            "answer": [1, 16, 4, 16],
        },


    ]
}
