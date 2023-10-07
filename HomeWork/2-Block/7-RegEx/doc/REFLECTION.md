# REFLECTION

1. JSON parsing can hear like preaty standart and trivial task but unless you write it from scratch as in the our case. So, it force for deep understanding topics like: RegEx, Theory of commpilers, diffrernt part of compilers pipline like Lexing, Parsing, tokenization, syntax analysis and building syntax tree.

2. In this case, I have used KISS principle to shortened some parts of system and put it together such parsing lexems and creating tokens. First goal was "Functional is first" So, have'nt so much time for refactoring or implementing elegant algoritm and data structures. The original plans were to build a binary AST(Abstract syntax tree) to efficiently looking for element or make relations for syntax analysis.But main concept that I build my parser on was: 

> **_JSON BNF_** or (Backus–Naur form) JSON’s grammar defines the correct format by assigment everything everything through everything. These are the rules we need to follow to properly parse the JSON text. If the text does not follow the correct grammar, then the parser should throw an error message to indicate that the JSON text is unparseable.

```bnf
<JSON>     ::= <value>
<value>    ::= <object> | <array> | <boolean> | <string> | <number> | <null>
<array>    ::= "[" [<value>] {"," <value>}* "]"
<object>   ::= "{" [<property>] {"," <property>}* "}"
<property> ::= <string> ":" <value>
```

We can see that everything is value that can be different data types with specific rulse.

3. The main problem I have encountered was building algo. of syntax analysis and catching different misstakes in gramar, also synchronizaton different conditions and words together, or correct tokinzation to skip unnsesary and select important. The only difficulty with the expressions was their scary👻👹😱 cryptographic syntax and because of this it was tedious to customize it to fit yourself.