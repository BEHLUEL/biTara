import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import GirisSayfasi from './src/components/GirisSayfasi';
import MobilTarifeler from './src/components/MobilTarifeler';
import InternetTarifeler from './src/components/InternetTarifeler';
import MobilAyrinti from './src/components/MobilAyrinti';
import InternetAyrinti from './src/components/InternetAyrinti';
import MobilKisitSayfasi from './src/components/MobilKisitSayfasi';
import InternetKisitSayfasi from './src/components/InternetKisitSayfasi';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="bitara">
                <Scene key="mobiltarifeler" component={MobilTarifeler} title="Mobil Tarifeler" />
                <Scene key="internettarifeler" component={InternetTarifeler} title="Internet Tarifeler" />
                <Scene key="mobilayrinti" component={MobilAyrinti} title="Mobil Tarife Ayrıntı" />
                <Scene key="internetayrinti" component={InternetAyrinti} title="Internet Tarife Ayrıntı" />
                <Scene key="mobilkisitsayfasi" component={MobilKisitSayfasi} title="Mobil Tarife Arama" />
                <Scene key="internetkisitsayfasi" component={InternetKisitSayfasi} title="Internet Tarife Arama" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
