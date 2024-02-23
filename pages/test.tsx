
import dynamic from 'next/dynamic'

const TaskTreeComponent = dynamic(() => import('@/components/Task/TestTask'), { ssr: false })
const test = () => {
    return (
        <div>
            <TaskTreeComponent  />
        </div>
    )
}

export default test