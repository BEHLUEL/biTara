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
        <Router style={styles.container} >
            <Scene style={{ backgroundColor: 'red' }} key="bitara">
                <Scene  
                hideNavBar={1}
                key="girissayfasi" 
                component={GirisSayfasi} 
                title="" 
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
                navTransparent={1}
                hideNavBar={1}
                navigationBarStyle={{ backgroundColor: 'transparent' }}
                //titleStyle={{ color: 'rgb(120,120,180)', align: 'center' }}
                key="internetkisitsayfasi" 
                component={InternetKisitSayfasi} 
                title="" 
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
