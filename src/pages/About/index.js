import React from 'react';
import { FaLinkedin, FaGithub, FaBeer } from 'react-icons/fa';

import {
  Background,
  Container,
  List,
  Tag,
  SocialButton,
  Header,
  Section,
  Code,
  Buttons,
} from './styles';
import { tech } from './content';
import Photo from '../../../static/assets/images/ronaldo-santiago.png';
import { colorlevels } from '../../utils/colors';

function About() {
  return (
    <Background>
      <Container>
        <Header>
          <figure>
            <img src={Photo} />
          </figure>
          <div>
            <h1>Ronaldo Santiago</h1>
            <span>Sr software engineer / Front-end</span>
          </div>
        </Header>

        <Section colors={colorlevels.blue[2]}>
          <p>
            Apenas mais um engenheiro de software apaixonado por tecnologia.
          </p>
          <Buttons>
            <SocialButton
              href="https://www.linkedin.com/in/ronaldo-santiago/"
              target="_blank"
            >
              <FaLinkedin size={20} /> Linkedin
            </SocialButton>
            <SocialButton
              href="https://github.com/RonaldoSetzer/"
              target="_blank"
            >
              <FaGithub size={20} />
              GitHub
            </SocialButton>
            <SocialButton href="https://www.codewithbeer.com/" target="_blank">
              <FaBeer size={20} />
              Blog
            </SocialButton>
          </Buttons>
        </Section>

        <Section colors={colorlevels.red[0]}>
          <h1>
            <strong>Challenge - charlie</strong>
          </h1>
          <p>
            Rapidinho você faz, é só uma tela, é muito comum ouvir esta frase no
            meio da tecnologia, mas a verdade ė que as aparências enganam, e
            essa é magia de um bom desafio.
          </p>

          <p>
            Overengineering ou no ditado popular "dar tiro de bazooka em
            formiga" é a melhor maneira de descrever o processo de
            desenvolvimento desta aplicação, deixando claro que o intuito em
            nenhum momento foi se em criar algo de maneira simples, muito pelo
            contrário, foi expor conhecimentos relevantes, seja em simples
            tecnologias de Frontend a configurações complexas.
          </p>

          <p>
            A experiência foi tao prazerosa que eu poderia ficar semanas dando
            continuidade ao desenvolvimento, confesso que já criei um mini
            backlog no Jira para futuras features.
          </p>

          <p>
            O Projeto foi desenvolvido utilizando as seguintes combinações de
            tecnologia:
          </p>

          <ul>
            <li>
              <b>Frontend:</b> React + Styled Components (css-in-js).
            </li>
            <li>
              <b>Gerenciamento de estado:</b> Redux + Redux Saga + React Hooks.
            </li>
            <li>
              <b>Documentacao:</b> Storybook
            </li>
            <li>
              <b>Testes:</b> Jest (unit-test) + Cypress (e2e)
            </li>
            <li>
              <b>Bundle:</b> Webpack
            </li>
            <li>
              <b>Ambiente de desenvolvimento:</b> Docker + Docker-Compose
            </li>
            <li>
              <b>Code:</b> JavaScript + Eslint + Prettier
            </li>
            <li>
              <b>Git:</b> semantic commit messages
            </li>
          </ul>
        </Section>

        <Section colors={colorlevels.red[1]}>
          <h1>Inicializacao</h1>

          <Code>
            <p>git clone $repositorio</p>
            <p>cd $repositorio</p>
            <p>
              <span>// with docker</span>
            </p>
            <p>docker-compose up --build</p>
            <p>
              <span>// sem docker</span>
            </p>
            <p>
              yarn dev <span>// inicia a aplicacao port: 3000</span>
            </p>
            <p>
              yarn storybook <span>// inicia o storybook port: 6006</span>
            </p>
            <p>
              yarn test <span>// roda os testes unitarios (jest)</span>
            </p>
            <p>
              yarn test:e2e <span>// roda os testes end-to-end (cypress)</span>
            </p>
          </Code>
        </Section>

        <Section colors={colorlevels.yellow[1]}>
          <h1>Tecnologias</h1>
          <List>
            {Object.keys(tech).map(key => (
              <Tag key={key}>
                <a href={tech[key]} target="_blank">
                  {key}
                </a>{' '}
              </Tag>
            ))}
          </List>
        </Section>
      </Container>
    </Background>
  );
}

export default About;
