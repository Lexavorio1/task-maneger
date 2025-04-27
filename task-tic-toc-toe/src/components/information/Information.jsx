import { connect } from '../../connect'

const InfoComponent = ({ currentPlayer, isGameEnded, isDraw }) => {
  if (isGameEnded) return <div>Победитель: {currentPlayer}</div>
  if (isDraw) return <div>Ничья!</div>
  return <div>Текущий ход: {currentPlayer}</div>
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw
})

export const Info = connect(mapStateToProps)(InfoComponent)