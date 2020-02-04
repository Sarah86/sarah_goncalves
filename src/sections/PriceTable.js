import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import Section from '../components/Section';

const PriceTable = () => {
  const whatsapp = 'https://wa.me/393770914006';

  return (
    <>
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
        <PricingTable highlightColor="#EA80B3">
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="ACHO QUE ESSE JÁ DÁ"
            title="RÁPIDO E BÁSICO"
            priceText="R$ 1.500,00"
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
            <PricingDetail strikethrough>
              {' '}
              <b>Assistência de 30 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="PRA MIM ESSE TÁ BOM!"
            title="CUSTOMIZADÍSSIMO"
            priceText="R$ 2.500,00"
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
        <PricingTable highlightColor="#EA80B3">
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="É ESSE!"
            title="BÁSICO COM BACKEND"
            priceText="R$ 1.800,00"
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
            <PricingDetail strikethrough>
              {' '}
              <b>Assistência de 30 dias</b> para tirar dúvidas e fazer
              alterações
            </PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open(whatsapp, '_blank')}
            buttonText="ASSIM TÁ MELHOR!"
            title="CUSTOMIZADÍSSIMO COM BACKEND"
            priceText="R$ 2.800,00"
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
          name="Condições gerais de pagamento"
          icon="💰"
          Box="Condições"
        />
        <p>
          Pagamento de 50% no início do projeto e 50% na entrega ou à combinar.
        </p>
      </Section.Container>
    </>
  );
};

export default PriceTable;
