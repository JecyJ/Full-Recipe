'use client'

import Cusine from "@components/Cusine";
import { useRouter } from "next/navigation";


const Italian = () => {
  const router = useRouter();
  const cuisineName = router.query.cuisine || 'Italian';

  return (
    <section>
      <Cusine cuisineName={cuisineName} />
    </section>
  )
}

export default Italian;