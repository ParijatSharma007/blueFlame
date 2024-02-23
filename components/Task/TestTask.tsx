import Tree from 'react-d3-tree';

const MyTree = () => {
    const data = {
        name: 'Root',
        children: [
            {
                name: 'Parent 1',
                attributes: { color: 'red', size: 'small' },
                children: [
                    { name: 'Child 1', attributes: { color: 'blue', size: 'large' } },
                    { name: 'Child 2', attributes: { color: 'green', size: 'medium' } }
                ]
            },
            {
                name: 'Parent 2',
                attributes: { color: 'yellow', size: 'large' },
                children: [
                    { name: 'Child 3', attributes: { color: 'purple', size: 'small' } },
                    { name: 'Child 4', attributes: { color: 'orange', size: 'medium' } }
                ]
            }
        ]
    };


    const renderTooltip = (nodeData) => {
        return (
            <div style={{ background: 'white', padding: '5px' }}>
                {nodeData.tooltip}
            </div>
        );
    };

    return (
        <div id="treeContainer">
            <Tree
                data={data}
                pathFunc='step'
                zoomable

                orientation="horizontal"

                // scaleExtent={{ min: 1, max: 3 }}
                nodeSize={{ x: 300, y: 200 }}
                allowForeignObjects
                nodeSvgShape={{
                    shape: 'none', // Set the default shape to none
                }}
                // translate={{ x: 200, y: 200 }}
                collapsible={false}
            />
        </div>
    );
};

export default MyTree;