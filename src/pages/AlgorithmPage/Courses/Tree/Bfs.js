
const Bfs = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Breadth First Search</div>
            Breadth - First Traversal(or Search) for a graph is similar to Breadth - First Traversal of a tree(See method 2 of this post).The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again.To avoid processing a node more than once, we use a boolean visited array.For simplicity, it is assumed that all vertices are reachable from the starting vertex.
            <br /><br />
            For example, in the following graph, we start traversal from vertex 2. When we come to vertex 0, we look for all adjacent vertices of it. 2 is also an adjacent vertex of 0. If we don’t mark visited vertices, then 2 will be processed again and it will become a non - terminating process.A Breadth - First Traversal of the following graph is 2, 0, 3, 1.
        </div>
    );
}

export default Bfs;