import { NavLink } from 'react-router-dom';
import { InterfaceVenda } from '../Context/DataContext';

export function VendaItem({ venda }: { venda: InterfaceVenda }) {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: 'monospace' }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
}
