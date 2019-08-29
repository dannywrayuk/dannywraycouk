import React from 'react';
import Head from '../../../../_atoms/Head';
import StandardApp from '../../../../_molecules/StandardApp';


const HomePageMain = () => (
  <>
    <Head title="howdy" />
    <StandardApp content={
      <p>hello</p>
    }
    />
  </>
);

export default HomePageMain;
