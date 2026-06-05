export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const treeText = `Tree Structure for questions 17-20:
      A
    /   \\
   B     C
  / \\   / \\
 D   E F   G
/|   |\\
H I J K`;

export const AI_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the difference between acting humanly and acting rationally?",
    options: [
      "Acting humanly refers to the physical behavior exhibited by humans, while acting rationally refers to the behavior that is optimal for achieving a goal.",
      "Acting humanly is based on instinct and emotion, while acting rationally is based on rational decision-making.",
      "Acting humanly is concerned with emulating human behavior, while acting rationally is concerned with designing intelligent agents that behave optimally.",
      "There is no difference between acting humanly and acting rationally."
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "What is the difference between a simple reflex agent and a goal-based agent?",
    options: [
      "A reflex agent is based on stimulus-response rules, while a goal-based agent is based on a model of the world and a goal.",
      "A reflex agent only responds to the current percept, while a goal-based agent considers the entire history of percepts and actions.",
      "A reflex agent is used in reactive systems, while a goal-based agent is used in deliberative systems.",
      "There is no difference between a reflex agent and a goal-based agent."
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What is the difference between a goal-based agent and a utility-based agent?",
    options: [
      "A goal-based agent is based on a model of the world and a goal, while a utility-based agent is based on a model of the world and a utility function.",
      "A goal-based agent only considers the immediate goal, while a utility-based agent considers the long-term consequences of its actions.",
      "A goal-based agent is used in reactive systems, while a utility-based agent is used in deliberative systems.",
      "There is no difference between a goal-based agent and a utility-based agent."
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "What is the difference between an uninformed search algorithm and an informed search algorithm?",
    options: [
      "An uninformed search algorithm does not use any knowledge about the problem domain, while an informed search algorithm uses heuristics or other domain-specific knowledge to guide the search.",
      "An uninformed search algorithm is used in reactive systems, while an informed search algorithm is used in deliberative systems.",
      "An uninformed search algorithm is based on depth-first search, while an informed search algorithm is based on breadth-first search.",
      "There is no difference between an uninformed search algorithm and an informed search algorithm."
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "What is the difference between a breadth-first search and a depth-first search?",
    options: [
      "A breadth-first search explores all the nodes at a given depth before moving to the next level, while a depth-first search explores as far as possible along each branch before backtracking.",
      "A breadth-first search is used in reactive systems, while a depth-first search is used in deliberative systems.",
      "A breadth-first search is an uninformed search algorithm, while a depth-first search is an informed search algorithm.",
      "There is no difference between a breadth-first search and a depth-first search."
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "What is the difference between a heuristic function and an evaluation function?",
    options: [
      "A heuristic function estimates the cost of reaching the goal from a given state, while an evaluation function measures the quality of a solution to a problem.",
      "A heuristic function is used in uninformed search algorithms, while an evaluation function is used in informed search algorithms.",
      "A heuristic function is based on domain-specific knowledge, while an evaluation function is based on generic metrics such as time or space complexity.",
      "There is no difference between a heuristic function and an evaluation function."
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What is an agent in artificial intelligence?",
    options: [
      "An agent is an entity that perceives its environment through sensors and acts upon that environment through actuators.",
      "An agent is a type of programming language used in AI systems.",
      "An agent is a type of machine learning algorithm.",
      "An agent is a type of rule-based system."
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "What is a rational agent?",
    options: [
      "A rational agent is an agent that chooses the action that maximizes its expected utility, based on its current knowledge and beliefs about the world.",
      "A rational agent is an agent that always chooses the action with the highest immediate reward, regardless of its long-term consequences.",
      "A rational agent is an agent that always chooses the action that is most consistent with its programming, regardless of its external environment.",
      "A rational agent is an agent that uses reinforcement learning to update its behavior over time."
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What is the difference between a reflex agent and a model-based agent?",
    options: [
      "A reflex agent makes decisions based on its current percept, while a model-based agent maintains an internal model of the world and uses it to make decisions.",
      "A reflex agent is a type of learning agent, while a model-based agent is a type of knowledge-based agent.",
      "A reflex agent is a type of deliberative system, while a model-based agent is a type of reactive system.",
      "There is no difference between a reflex agent and a model-based agent."
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "What is the purpose of a performance measure in problem specification?",
    options: [
      "A performance measure specifies the standard of success that an agent must achieve in its environment.",
      "A performance measure specifies the sensors and actuators that an agent uses to perceive and act in its environment.",
      "A performance measure specifies the internal state of an agent.",
      "A performance measure specifies the initial state of an agent."
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What is the difference between a deterministic environment and a stochastic environment?",
    options: [
      "In a deterministic environment, the outcome of an action is fully determined by the current state and the action taken, while in a stochastic environment, the outcome of an action is uncertain and depends on chance.",
      "In a deterministic environment, the agent has access to a complete set of rules and knowledge about the world, while in a stochastic environment, the agent must learn from experience.",
      "There is no difference between a deterministic environment and a stochastic environment.",
      "In a deterministic environment, the agent can observe the complete state of the environment at each time step, while in a stochastic environment, the agent can only observe a partial view of the environment."
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "What is the difference between a discrete environment and a continuous environment?",
    options: [
      "In a discrete environment, the state space and action space are finite and discrete, while in a continuous environment, the state space and action space are infinite and continuous.",
      "In a discrete environment, the agent has access to a complete set of rules and knowledge about the world, while in a continuous environment, the agent must learn from experience.",
      "There is no difference between a discrete environment and a continuous environment.",
      "In a discrete environment, the agent can observe all percepts in the environment."
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What is a stochastic environment?",
    options: [
      "A stochastic environment is an environment where the next state of the environment is not completely determined by the current state and the action taken by the agent.",
      "A stochastic environment is an environment where the agent can only take a limited set of actions.",
      "A stochastic environment is an environment where the agent has access to a complete set of rules and knowledge about the world.",
      "A stochastic environment is an environment where the agent must learn from experience."
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "What is an example of a discrete environment?",
    options: [
      "Chess game",
      "Car driving",
      "Weather prediction",
      "Stock market prediction"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "What is an example of a dynamic environment?",
    options: [
      "Traffic control",
      "Game of chess",
      "Tic-tac-toe game",
      "Solving mathematical equations"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which search algorithm is both complete and optimal?",
    options: [
      "Breadth-first search",
      "Depth-first search",
      "Uniform-cost search",
      "Iterative deepening search"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Consider the following search tree where the current node while running the search algorithm is E. If the running search algorithm is \"Breadth-First Search\", the next node to be traversed is:\n\n" + treeText,
    options: [
      "Node(J)",
      "Node(K)",
      "Node(C)",
      "Node(F)"
    ],
    correctAnswer: 3
  },
  {
    id: 18,
    question: "Consider the search tree where the current node is E. If the running search algorithm is \"Depth-First Search\", the next node to be traversed is:\n\n" + treeText,
    options: [
      "Node(J)",
      "Node(K)",
      "Node(C)",
      "Node(F)"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Consider the search tree where the current node is E. If the running search algorithm is \"Depth-Limited Search with limit = 3\", the next node to be traversed is:\n\n" + treeText,
    options: [
      "Node(J)",
      "Node(K)",
      "Node(C)",
      "Node(F)"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Consider the search tree where the current node is E. If the running search algorithm is \"Depth-Limited Search with limit = 2\", the next node to be traversed is:\n\n" + treeText,
    options: [
      "Node(J)",
      "Node(K)",
      "Node(C)",
      "Node(F)"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "The search strategy which expands the least-cost unexpanded node is called:",
    options: [
      "Depth-first",
      "Breadth-first",
      "Uniform-cost",
      "Iterative deepening"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "When is the Breadth first search optimal?",
    options: [
      "When there is a small number of nodes",
      "When all path costs are equal",
      "When all path costs are unequal",
      "None of the previous"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Depth-first search is ...... efficient and Breadth-first search is ...... efficient.",
    options: [
      "Space, Time",
      "Time, Space",
      "Time, Time",
      "Space, Space"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "Depth-first search is ...... and Breadth-first search is ......",
    options: [
      "Optimal, Complete",
      "Complete, Optimal",
      "Optimal, Not Complete",
      "Not Complete, Optimal"
    ],
    correctAnswer: 3
  },
  {
    id: 25,
    question: "A heuristic is a function that estimates how a state is close to a/an:",
    options: [
      "Next state",
      "Goal",
      "Initial State",
      "All the previous"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "A* search algorithm combines ...... and ...... search algorithms.",
    options: [
      "DFS, BFS",
      "DFS, Greedy",
      "UCS, Greedy",
      "UCS, BFS"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "A heuristic h is admissible (optimistic) if it gives values ...... the actual cost.",
    options: [
      "Higher than",
      "Lower than",
      "Equal to",
      "Not equal to"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "If the heuristic h of A* search is inadmissible, the search algorithm will be:",
    options: [
      "Optimal",
      "Not optimal",
      "Incomplete",
      "None of the previous"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "In constraint-satisfaction problem, the goal state is ...... at the beginning of the search.",
    options: [
      "Exactly known",
      "Partially known",
      "Not-known",
      "None of the previous"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "Entropy measures the level of ...... in a group of examples.",
    options: [
      "Purity",
      "Impurity",
      "Similarity",
      "None of the previous"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "The good training dataset for learning should have ...... values.",
    options: [
      "High Entropy",
      "Low entropy",
      "Medium entropy",
      "None of the previous"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Information Gain is the expected ...... in entropy of the target variable Y for data sample S, due to sorting on variable A.",
    options: [
      "Change",
      "Increase",
      "Reduction",
      "Stability"
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    question: "Nonlinear Regression is considered as ...... learning technique.",
    options: [
      "Unsupervised",
      "Supervised",
      "Semi-supervised",
      "Reinforcement"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Linear regression can be applied if the input data X is ...... Dimension/s.",
    options: [
      "Only one",
      "Only two",
      "Only three",
      "Any number of"
    ],
    correctAnswer: 3
  },
  {
    id: 35,
    question: "Classification can be applied if the input data X is ......",
    options: [
      "Discrete",
      "Continuous",
      "Discrete or Continuous",
      "Positive"
    ],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "In this course, we are studying rational agents to know how these agents can ........",
    options: [
      "Think rationally",
      "Think humanly",
      "Act Rationally",
      "Act humanly"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "The Turing test measures the ability of machines on ......",
    options: [
      "Thinking rationally",
      "Thinking humanly",
      "Acting Rationally",
      "Acting humanly"
    ],
    correctAnswer: 3
  },
  {
    id: 38,
    question: "Agent architecture + ...... = Agent",
    options: [
      "Sensors",
      "Actuators",
      "Program",
      "Artificial Intelligence"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "...... environment is the environment where the agent's sensors don't give it access to the complete state of the environment at each point in time.",
    options: [
      "Fully observable",
      "Episodic",
      "Partially observable",
      "Dynamic"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "...... environment is deterministic except for the actions of other agents.",
    options: [
      "Fully observable",
      "Strategic",
      "Stochastic",
      "Sequential"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "A self-driving-car's environment is ......",
    options: [
      "Fully observable",
      "Episodic",
      "Discrete",
      "Continuous"
    ],
    correctAnswer: 3
  },
  {
    id: 42,
    question: "...... maintains internal state that keeps track of aspects of the environment that cannot be currently observed.",
    options: [
      "Simple reflex agent",
      "Model based reflex agent",
      "Goal based agent",
      "Utility based agent"
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "The search problem is considered as the problem of designing a ...... in fully observable, deterministic, discrete, known environments.",
    options: [
      "Simple reflex agent",
      "Model based reflex agent",
      "Goal based agent",
      "Utility based agent"
    ],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "Search is the process of looking for the sequence of ...... that reaches the goal.",
    options: [
      "Actions",
      "States",
      "Perceptions",
      "Heuristics"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "In tree search algorithms, ...... represents the maximum number of nodes in memory.",
    options: [
      "Completeness",
      "Optimality",
      "Time complexity",
      "Space complexity"
    ],
    correctAnswer: 3
  },
  {
    id: 46,
    question: "Blind searching is general term for ......",
    options: [
      "Informed Search",
      "Uninformed Search",
      "Informed & Uninformed Search",
      "Heuristic Search"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Which search algorithm is a variant of depth-first search that limits the depth of the search?",
    options: [
      "Depth-limited search",
      "Breadth-first search",
      "Iterative deepening search",
      "Uniform-cost search"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "Which search algorithm is a combination of depth-first search and heuristic search?",
    options: [
      "A* search",
      "Breadth-first search",
      "Uniform-cost search",
      "Iterative deepening search"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "What is the difference between iterative deepening search and depth-limited search?",
    options: [
      "Iterative deepening search gradually increases the depth limit, while depth-limited search uses a fixed depth limit.",
      "Depth-limited search is complete and optimal, while iterative deepening search is not.",
      "Iterative deepening search always finds the optimal solution, while depth-limited search does not.",
      "Depth-limited search is faster than iterative deepening search."
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which of the following heuristic functions is admissible?",
    options: [
      "h(n) = the actual cost from the start node to n",
      "h(n) = 0",
      "h(n) = the maximum cost from the start node to n",
      "h(n) = a randomly generated value"
    ],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "What is the main drawback of using greedy best-first search?",
    options: [
      "It may not find the optimal solution.",
      "It requires a large amount of memory.",
      "It is very slow.",
      "It is not a complete algorithm."
    ],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "What does accuracy measure in classification tasks?",
    options: [
      "The proportion of correctly classified instances among all instances.",
      "The ability to correctly predict positive instances.",
      "The ability to correctly predict negative instances.",
      "The trade-off between precision and recall."
    ],
    correctAnswer: 0
  },
  {
    id: 53,
    question: "What does precision measure in classification tasks?",
    options: [
      "The proportion of correctly predicted positive instances among all positive predictions.",
      "The proportion of correctly predicted negative instances among all negative predictions.",
      "The trade-off between true positive rate and false positive rate.",
      "The overall ability to discriminate between positive and negative instances."
    ],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "What does recall (sensitivity) measure in classification tasks?",
    options: [
      "The proportion of correctly predicted positive instances among all actual positive instances.",
      "The proportion of correctly predicted negative instances among all actual negative instances.",
      "The trade-off between precision and specificity.",
      "The overall accuracy of the classification model."
    ],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "What does F1 score measure in classification tasks?",
    options: [
      "The harmonic mean of precision and recall.",
      "The overall accuracy of the classification model.",
      "The proportion of correctly classified instances among all instances.",
      "The trade-off between true positive rate and false positive rate."
    ],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "What does support measure in classification tasks?",
    options: [
      "The number of instances in each class.",
      "The overall accuracy of the classification model.",
      "The proportion of correctly classified instances among all instances.",
      "The trade-off between true positive rate and false positive rate."
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "What does Mean Squared Error (MSE) measure in regression tasks?",
    options: [
      "The average difference between predicted and actual values, squared.",
      "The average difference between predicted and actual values.",
      "The proportion of correctly classified instances among all instances.",
      "The trade-off between precision and recall."
    ],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "What does Mean Absolute Error (MAE) measure in regression tasks?",
    options: [
      "The average difference between predicted and actual values.",
      "The average difference between predicted and actual values, squared.",
      "The proportion of correctly classified instances among all instances.",
      "The trade-off between precision and recall."
    ],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "What does R-squared (coefficient of determination) measure in regression tasks?",
    options: [
      "The proportion of variance explained by the regression model.",
      "The average difference between predicted and actual values.",
      "The trade-off between precision and recall.",
      "The overall accuracy of the regression model."
    ],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "What does Mean Absolute Percentage Error (MAPE) measure in regression tasks?",
    options: [
      "The average percentage difference between predicted and actual values.",
      "The average difference between predicted and actual values, squared.",
      "The proportion of correctly classified instances among all instances.",
      "The overall accuracy of the regression model."
    ],
    correctAnswer: 0
  }
];
