### Problems 

#### Optimal Account Balancing in C++ 

Suppose a group of friends went on holiday and sometimes they lent each other money. So as an example, Amit paid for Bikram's lunch for $10. Then later Chandan gave Amit $5 for a taxi fare. We have to design a model where each transaction is taken as a tuple (x, y, z) which means person x gaveperson y $z. 

Assuming Amit, Bikram, and Chandan are person 0, 1, and 2 respectively the transactions can be represented as [[0,1,10], [2,0,5]]. If we have a list of transactions between a group of people, we have to find the minimum number of transactions required to settle the debt. 

So, if the input is like [[0,1,10], [2,0,5]] thenthe ouptut will be 2, as person #0 gabe person #1 $10. Then person #2 gave person #0 $5. Here two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each. 

