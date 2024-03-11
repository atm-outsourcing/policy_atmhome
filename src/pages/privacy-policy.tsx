import { Heading } from "@siakit/heading";
import { Flex } from "@siakit/layout";

import Logo from '../assets/logo_evs.png'
import { Text } from "@siakit/text";

export function PrivacyPolicy(): JSX.Element {
  return (
    <Flex flex align='center' direction="column" overflow>
      <Flex css={{ backgroundColor: '#121414' }} height={150} width="100%" justify="center" align="start">
        <Flex maxWidth={992} direction="column" width="100%" padding gap justify="between">
          <img src={Logo} alt="logo" style={{ height: 51, width: 171, objectFit: 'contain' }} />
          <Heading css={{ color: 'white' }}>Política de Privacidade</Heading>
        </Flex>
      </Flex>
      <Flex flex overflow width="100%" justify="center" >
        <Flex maxWidth={992} direction="column" width="100%" padding gap flex margin="16px 0 32px">
          <Heading size="xs">
            No Grupo ATM (“ATM”), buscamos proporcionar a melhor experiência para garantir que você desfrute ao máximo dos nossos serviços. E, para isso, a sua privacidade e a segurança dos seus dados pessoais são e sempre serão muito importantes para nós.
          </Heading>

          <Flex direction="column" gap={8}>

            <Heading size="xs">
              1. Sobre as informações coletadas e tratadas pela ATM
            </Heading>
            <Text lowContrast>
              A ATM coleta e trata dados pessoais para fins como identificação e autenticação, viabilização de ofertas de serviços, operacionalização de novos produtos, problemas técnicos ou de segurança nos processos de identificação e autenticação, e até mesmo a melhoria de serviços e da sua experiência. Dentre os dados coletados, a ATM poderá tratar dados sensíveis, como biometria, para fins de prevenção de fraude e garantia de segurança dos serviços contratados. Também podemos coletar e tratar dados para cumprir com a legislação vigente aplicável.
            </Text>

          </Flex>
          <Flex direction="column" gap={8}>

            <Heading size="xs">
              2. Cookies
            </Heading>
            <Text lowContrast>

              Usamos Cookies para que você tenha a melhor experiência em nosso App.
            </Text>
          </Flex>
          <Flex direction="column" gap={8}>

            <Heading size="xs">
              3. Duração do tratamento dos dados pessoais
            </Heading>
            <Text lowContrast>

              O prazo de tratamento dos seus dados pessoais pela ATM variará de acordo com os tipos de produtos e serviços contratados/prestados/fornecidos, de acordo com as finalidades do tratamento dos dados pessoais, ou de acordo com as disposições contratuais e legais em questão.
            </Text>
          </Flex>

          <Flex direction="column" gap={8}>

            <Heading size="xs">
              4. Os seus direitos como titular dos dados pessoais
            </Heading>
            <Text lowContrast>

              A LGPD confere uma série de direitos aos titulares dos dados. Sendo assim, você, como titular de dados, pode fazer as seguintes solicitações a ATM conforme direitos previstos na Lei: confirmação da existência de tratamento, acesso aos dados pessoais, correção dos dados incompletos, inexatos ou desatualizados, anonimização, bloqueio ou eliminação dos dados, portabilidade dos dados pessoais, informações sobre o compartilhamento dos dados pessoais, informação sobre a possibilidade de não fornecer consentimento, bem como de ser informado sobre as consequências, em caso de negativa, revogação do consentimento, oposição ao tratamento dos dados pessoais, revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem os interesses dos titulares de dados.
            </Text>
          </Flex>
          <Flex direction="column" gap={8}>

            <Heading size="xs">
              5. Compartilhamento dos dados pessoais
            </Heading>
            <Text lowContrast>

              A ATM zela pela privacidade dos seus titulares de dados e, em conformidade com as normas de proteção de dados, somente compartilha suas informações para as finalidades previstas nesse Termo e na Política de Privacidade completa.
            </Text>
          </Flex>
          <Flex direction="column" gap={8}>

            <Heading size="xs">
              6. Canais de atendimento para assuntos de privacidade
            </Heading>
            <Text lowContrast>

              Para que você possa exercer seus direitos como titular de dados, bem como determinar suas preferências no tratamento e utilização pela ATM de alguns de seus dados pessoais você pode usar os canais de atendimento oficiais.
            </Text>
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  )
}