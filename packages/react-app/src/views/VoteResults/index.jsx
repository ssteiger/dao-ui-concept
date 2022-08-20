import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'antd';
import { useContractReader } from 'eth-hooks';

export default function VoteResults({ localProvider, tx, readContracts, writeContracts, address, price, gasPrice }) {
  return (
    <Row gutter={[16, 24]} className="py-4 bg-black">
      <Col className="gutter-row text-white" xs={24}>
        Vote Results
      </Col>
    </Row>
  );
}
