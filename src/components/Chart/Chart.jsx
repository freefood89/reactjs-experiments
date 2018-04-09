import React from 'react'
import {
  axisLeft,
  max,
  scaleLinear,
  select,
} from 'd3'
import { withState } from 'recompose';
import { withStyles } from 'material-ui/styles';

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    const node = this.node
    const dataMax = max(this.props.data)
    const height = this.node.getAttribute('height')
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, height])

    const barWidth = 50 / this.props.data.length

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d, i) => 5 + i * barWidth + '%')
      .attr('y', d => height - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', barWidth + '%')

    let axis = axisLeft()
      .scale(yScale)
      .ticks(5)

    select(node).append("g")
      .attr("transform", "translate(20, 0)")
      .call(axis)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.svgContainer}>
        <svg
          ref={node => this.node = node}
          width={'100%'} height={250}
        />
      </div>
    )
  }
}

const styles = theme => ({
  svgContainer: {
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'top',
    overflow: 'hidden',
  }
})

export default withStyles(styles)(Chart)
