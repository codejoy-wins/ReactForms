import React, { Component } from 'react'

export class Table extends Component {
  render() {
      console.log("currently no data from app state");
      console.log(`this.props.userdata: ${this.props.userData} from app state`);
      const TableHead = ()=>{
          return(
            <tr>
              <th>name</th>
              <th>job</th>
            </tr>
          )
      }
      const TableBody = (props)=>{ 
          const rows = props.userData.map((thing,spot)=>{
              return(
                <tr key={spot}>
                    <td>{thing.name}</td>
                    <td>{thing.job}</td>
                </tr>
              )
          })
          return(
            <tbody>
                {rows}
            </tbody>
          );
      }

    return (
      <div>
        <h3>I will display your data in a table</h3>
        <TableHead />
        <TableBody userData={this.props.userData}/>

      </div>
    )
  }
}

export default Table
