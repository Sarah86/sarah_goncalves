import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import Section from '../components/Section';
import PagSeguro from '../images/468x60_pagseguro_18x.gif';

const PriceTable = () => {
  const whatsapp = 'https://wa.me/393770914006';

  return (
    <>
      <div style={{ height: '50px' }}></div>
      <Section.Container id="Hora técnica">
        <Section.Header name="Hora técnica" icon="⏱" Box="Hora técnica" />
        <PricingTable highlightColor="#EA80B3">
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="É SÓ ISSO MESMO"
            title="SÓ QUERO UNS AJUSTES"
            priceText="R$ 115,00 / hora"
          >
            <PricingDetail> HTML 5</PricingDetail>
            <PricingDetail> React.js </PricingDetail>
            <PricingDetail> Wordpress </PricingDetail>
            <PricingDetail> E-commerce </PricingDetail>
            <PricingDetail> CSS3 </PricingDetail>
            <PricingDetail> Javascript e jQuery </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto e das horas trabalhadas
              pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Só pague pelas horas trabalhadas no projeto!</b>{' '}
            </PricingDetail>
          </PricingSlot>
        </PricingTable>
      </Section.Container>

      <Section.Container id="Sem Backend">
        <Section.Header
          name="Websites - SEM BACKEND"
          icon="🖥"
          Box="Pricelist - SEM BACKEND"
        />
        <p>
          Sem backend: sem interface de edição do usuário. Na prática, se vocẽ
          não tem blog e não precisa atualizar constantemente, esse serve pra
          você.
        </p>
        <PricingTable highlightColor="#EA80B3">
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="ACHO QUE ESSE JÁ DÁ"
            title="RÁPIDO E BÁSICO"
            priceText="R$ 1.580,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Pesquisa e apresentação de templates em <b>HTML5</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Substituição</b> do conteúdo do template pelo seu conteúdo em
              até 5 páginas
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              Substituição de <b>cores e fontes</b> pelas suas{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega em até 7 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail strikethrough>
              {' '}
              <b>Backend</b> para você mesmo criar ou alterar conteúdos
            </PricingDetail>
            <PricingDetail strikethrough>
              {' '}
              <b>Customização</b> de componentes como tamanhos e posições
            </PricingDetail>
            <PricingDetail strikethrough>
              {' '}
              Criação de <b>até 3 páginas</b> com os componentes do tema{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 7 dias</b> para tirar dúvidas e fazer alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="PRA MIM ESSE TÁ BOM!"
            title="CUSTOMIZADÍSSIMO"
            priceText="R$ 2.630,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Pesquisa e apresentação de templates em <b>HTML 5</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Substituição</b> do conteúdo do template pelo seu conteúdo em
              até 5 páginas
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              Substituição de <b>cores e fontes</b> pelas suas{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega em até 20 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail strikethrough>
              {' '}
              <b>Backend</b> para você mesmo criar ou alterar conteúdos
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Customização</b> de componentes como tamanhos e posições
            </PricingDetail>
            <PricingDetail>
              {' '}
              Criação de <b>até 3 páginas</b> com os componentes do tema
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 30 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="AÍ SIM!"
            title="LAYOUT EXCLUSIVO em React.js"
            priceText="À partir de R$ 4.000,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Desenvolvimento do seu layout exclusivo em <b>React.js</b>, uma
              das linguagens mais modernas, rápidas e de alta performance SEO no
              mercado.{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Tudo que preciso é do PSD com as imagens do website desenhado
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega estimada entre 30 e 45 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 30 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
        </PricingTable>
      </Section.Container>

      <Section.Container id="Com Backend">
        <Section.Header
          name="Websites - COM BACKEND"
          icon="🖥"
          Box="Pricelist"
        />
        <p>
          Com backend: com interface de edição do usuário. Pra quem tem blog ou
          precisa atualizar constantemente
        </p>

        <PricingTable highlightColor="#EA80B3">
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="É ESSE!"
            title="BÁSICO COM BACKEND"
            priceText="R$ 1.895,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Pesquisa e apresentação de templates em <b>Wordpress</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Instalação e configuração</b> do Wordpress na hospedagem
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Substituição</b> do conteúdo do template pelo seu conteúdo em
              até 5 páginas
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              Substituição de <b>cores e fontes</b> pelas suas{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega em até 10 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Backend</b> para você mesmo criar ou alterar conteúdos
            </PricingDetail>
            <PricingDetail strikethrough>
              {' '}
              <b>Customização</b> de componentes como tamanhos e posições{' '}
            </PricingDetail>
            <PricingDetail strikethrough>
              {' '}
              Criação de <b>até 3 páginas</b> com os componentes do tema{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 7 dias</b> para tirar dúvidas e fazer alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="ASSIM TÁ MELHOR!"
            title="CUSTOMIZADÍSSIMO COM BACKEND"
            priceText="R$ 2.950,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Pesquisa e apresentação de templates em <b>Wordpress</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Instalação e configuração</b> do Wordpress na hospedagem
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Substituição</b> do conteúdo do template pelo seu conteúdo em
              até 5 páginas
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              Substituição de <b>cores e fontes</b> pelas suas{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega em até 25 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Backend</b> para você mesmo criar ou alterar conteúdos
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Customização</b> de componentes como tamanhos e posições
            </PricingDetail>
            <PricingDetail>
              {' '}
              Criação de <b>até 3 páginas</b> com os componentes do tema
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 30 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="QUERO ESSE!"
            title="LAYOUT EXCLUSIVO em Wordpress"
            priceText="À partir de R$ 3.800,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Desenvolvimento do seu layout exclusivo em <b>Wordpress</b>, uma
              das plataformas mais consolidadas do mercado.{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Tudo que preciso é do PSD com as imagens do website desenhado
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega estimada entre 45 e 60 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 45 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="QUERO ARRASAR"
            title="LAYOUT EXCLUSIVO com Backend em React.js"
            priceText="À partir de R$ 6.000,00"
          >
            <PricingDetail>
              {' '}
              <b>Consultoria</b> para a compra de hospedagem e domínio
            </PricingDetail>
            <PricingDetail>
              {' '}
              Configuração de <b>e-mails</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Desenvolvimento do seu layout exclusivo em <b>React.js</b>, uma
              das linguagens mais modernas, rápidas e de alta performance SEO no
              mercado.{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Backend</b> em NetlifyCMS, Contentful ou outros compatíveis.{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              Tudo que preciso é do PSD com as imagens do website desenhado
            </PricingDetail>
            <PricingDetail>
              {' '}
              Acompanhamento do andamento do projeto pelo{' '}
              <a href="https://wakatime.com/" target="_blank">
                WakaTime
              </a>
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Entrega estimada entre 45 e 60 dias úteis!</b>{' '}
            </PricingDetail>
            <PricingDetail>
              {' '}
              <b>Assistência de 45 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
        </PricingTable>
      </Section.Container>

      <Section.Container id="Condições de pagamento">
        <Section.Header
          name="Condições de pagamento"
          icon="💰"
          Box="Condições"
        />
        <h3>
          Depósito Bancário{' '}
          <span style={{ display: 'block', fontSize: '.8em' }}>
            em 2x com -5%
          </span>
        </h3>
        <p>
          Pagamento de 50% no início do projeto e 50% na entrega por depósito
          bancário (10% de desconto)
        </p>
        <h3>
          PagSeguro{' '}
          <span style={{ display: 'block', fontSize: '.8em' }}>em até 18x</span>
        </h3>
        <p>
          <img
            src={PagSeguro}
            alt="Banner PagSeguro"
            title="Parcele em até 18x"
            width="100%"
            style={{ maxWidth: '400px' }}
          />
        </p>
        <h3>
          PayPal{' '}
          <span style={{ display: 'block', fontSize: '.8em' }}>
            parcelamento disponível de acordo com a conta Paypal
          </span>
        </h3>
        <div>
          <table border="0" cellpadding="10" cellspacing="0" align="left">
            <tbody>
              <tr>
                <td align="left"></td>
              </tr>
              <tr>
                <td align="left">
                  <a
                    href="https://www.paypal.com/it/webapps/mpp/paypal-popup"
                    title="Come funziona PayPal"
                    onclick="javascript:window.open('https://www.paypal.com/it/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                  >
                    <img
                      src="https://www.paypalobjects.com/webstatic/mktg/logo-center/logo_paypal_carte.jpg"
                      border="0"
                      alt="Marchi di accettazione PayPal"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Se interessou?</strong> Manda um WhatApp:{' '}
          <a href="https://wa.me/393770914006">+39 377 091 4006</a>.
        </p>
        <p>
          Atendo de qualquer lugar do mundo usando{' '}
          <strong>
            ferramentas modernas de reuniões online e monitoramento das horas de
            trabalho
          </strong>{' '}
          para garantir <strong>segurança e conforto</strong> de criação do seu
          projeto.
        </p>
        <p>
          <strong>Ficou na dùvida?</strong> Manda um Whatsapp do mesmo jeito.
          Vamos conversar sobre suas idéias e desejos e achar a melhor maneira,
          juntos, de fazer elas acontecerem.
        </p>
      </Section.Container>
    </>
  );
};

export default PriceTable;
