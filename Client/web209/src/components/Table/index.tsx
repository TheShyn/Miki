
type Props = {
    data: any,
    columns: any
}

export default function Table({data, columns}: Props) {
    console.log(columns, data);
    const THead = columns?.map((item:any)=>{
        return <td key={item.title}>{item.title}</td>
    })
    
  return (
    <table>
        <thead>
            <tr>
                {THead}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>sda</td>
                <td>sda</td>
            </tr>
        </tbody>
    </table>
  )
}