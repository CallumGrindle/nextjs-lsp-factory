import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { getLspFactory } from '../services/lsp-factory.service'

export const deployUniversalProfile = async () => {
  const lspFactory = await getLspFactory();

  console.log('Deploying base contracts...');

  const result = await lspFactory.LSP3UniversalProfile.deploy({
    controllingAccounts: ["0xb74a88C43BCf691bd7A851f6603cb1868f6fc147"],
    lsp3Profile: {
      name: "Universal Profile",
      description: "UP deployed by a NextJS app!",
      tags: ["example UP"],
    },
  });  
  
  console.log('Deployment complete!');
  console.log('Contracts', result);
  console.log("View your new UP at https://universalprofile.cloud/" + result.ERC725Account?.address);
}

const Home: NextPage = (props) => {
  return (
    <div>
      <div className={styles.container}>LSPFactory NextJS Example</div>
      <div>
        <button className={styles.container} onClick={deployUniversalProfile}>Deploy UP...</button>        
      </div>
    </div>
    )
}

export default Home
