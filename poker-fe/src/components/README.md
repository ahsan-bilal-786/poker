Its always good to keep the code clean and avoid the multiple logics and multiple components in same file. A jsx file should always represent a single component. It also helps in reusability of same code.

On the other hand, the pages directory should contain the layout of its features because if we integrate all the sections or features in the same file then it will messed up the code.

Due to these reasons, we have created a `components` directory in `src/` directory. We will implement each of page's feature in a separate component which will be placed in `components` directory.
