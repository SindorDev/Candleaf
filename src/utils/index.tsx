import { Spin, Flex,  } from 'antd';
import { Suspense } from "react"

const Loading = () => {

       return (
            <div className='w-full h-screen flex items-center justify-center'>
              <Flex align="center" gap="middle">
          <Spin tip="Loading..." size="large" />
        </Flex>
            </div>
       )
  }
  
  const SuspenseElement = ({children}: {children: React.ReactNode}) => {
       return ( <Suspense fallback={<Loading/>}> {children}  </Suspense>)
  }

  export {SuspenseElement}