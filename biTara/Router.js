import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import GirisSayfasi from './src/components/GirisSayfasi';
import MobilTarifeler from './src/components/MobilTarifeler';
import InternetTarifeler from './src/components/InternetTarifeler';
import MobilAyrinti from './src/components/MobilAyrinti';
import InternetAyrinti from './src/components/InternetAyrinti';
import MobilKisitSayfasi from './src/components/MobilKisitSayfasi';
import InternetKisitSayfasi from './src/components/InternetKisitSayfasi';

const RouterComponent = () => (
        <Router titleStyle={{ color: '#14153A' }}>
            <Scene style={styles.container} key="bitara">
                <Scene  
                key="girissayfasi"
                hideNavBar={true}
                component={GirisSayfasi} 
                title="Giriş Sayfası" 
                />

                <Scene 
                key="mobiltarifeler" 
                component={MobilTarifeler} 
                title="Mobil Tarifeler" 
                />

                <Scene 
                key="internettarifeler" 
                component={InternetTarifeler}
                title="Internet Tarifeler" 
                />
                
                <Scene 
                key="mobilayrinti" 
                component={MobilAyrinti} 
                title="Mobil Tarife Ayrıntı" 
                />
                <Scene 
                key="internetayrinti" 
                component={InternetAyrinti} 
                title="Internet Tarife Ayrıntı" 
                />
                
                <Scene 
                key="mobilkisitsayfasi" 
                component={MobilKisitSayfasi} 
                title="Mobil Tarife Arama" 
                />

                <Scene 
                key="internetkisitsayfasi" 
                component={InternetKisitSayfasi} 
                title="Internet Tarife Arama" 
                />

            </Scene>
        </Router>
    );

const styles = {
    container: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#002233',
    },
  };

export default RouterComponent;
