import { GetFormStats } from "@/actions/form"
import {LuView} from "react-icons/lu"
export default function Home() {
  return (
    <div className="container pt-4">Hello</div>
  )
}

async function CardStatsWrapper() {
    const stats = await GetFormStats();
    return <StatsCard loading={false} data={stats} />
}

interface StatsCardProps{
  data: Awaited<ReturnType< GetFormStats>>;
  loading: boolean;
}

function StatsCard(props: StatsCardProps){
  const {data, loading} = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard title="Total visits" icon={<LuView className="text-blue-600"/>}
      helperText="All time form visits"
      value={data.visits.toLocalString()}
      loading={loading}
      className="shadow-md shadow-blue-600"
      />
    </div>
  )
}


function StatsCard({title, value, icon, helperText, loading, className}){}