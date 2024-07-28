import { FilesystemItem } from './FilesystemItem';
import { nodes } from '../const';


function Filesystem() {
  return (
    <ul>
      {nodes.map((node) => (
        <FilesystemItem node={node} key={node.name} />
      ))}
    </ul>
  );
}

export { Filesystem };
