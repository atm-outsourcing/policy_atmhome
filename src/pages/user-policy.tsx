import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'
import { Separator } from '@siakit/separator'
import Logo from '../assets/logo.png'
import { Text } from '@siakit/text'
import { Card } from '@siakit/card'

export function UserPolicy() {
  return (
    <Flex flex align="center" direction="column" overflow>
      <Flex css={{ backgroundColor: '#121414' }} height={150} width="100%" justify="center" align="start">
        <Flex maxWidth={1200} direction="column" width="100%" padding gap justify="between">
          <img src={Logo} alt="logo" style={{ height: 51, width: 171, objectFit: 'contain' }} />
          <Heading css={{ color: 'white' }}>Declaração de Privacidade</Heading>
        </Flex>
      </Flex>

      <Flex maxWidth={1200} direction="column" width="100%" padding gap={32} flex >
        <Flex direction="column" gap>
          <Flex direction="column">
            <Heading size="2xl">Seus dados são seus.</Heading>
          </Flex>

          <Flex direction="column" gap={4}>
            <Text lowContrast>
              A proteção dos seus dados é muito importante para a ATM Home. Respeitamos a sua privacidade em nossa missão de proporcionar um serviço cada vez melhor!
            </Text>

            <Text lowContrast>
              Essa <span style={{ fontWeight: 'bold' }}>Declaração de Privacidade</span> descreve como obtemos, armazenamos, utilizamos, compartilhamos e <span style={{ fontWeight: 'bold' }}>protegemos</span> as suas informações.
            </Text>

            <Text lowContrast>
              <span style={{ fontWeight: 'bold' }}>Recomendamos que você conheça as nossas práticas como um todo</span>, mas aqui estão alguns pontos importantes para que você entenda como seus dados são tratados pela ATM:
            </Text>
          </Flex>
        </Flex>

        <Flex flex direction="column" gap={8}>
          <Flex flex align="center" justify="center" gap={8} css={{ '@media (max-width: 768px)': { flexDirection: 'column' } }}>
            <Card height="100%" width="35%" align="center" padding css={{ '@media (max-width: 768px)': { width: '100%' } }}>
              <Text lowContrast>
                • Os dados que você cadastra em nossas plataformas <span style={{ fontWeight: 'bold' }}>são tratados de forma segura.</span>
              </Text>

            </Card>

            <Card height="100%" width="35%" align="center" padding css={{ '@media (max-width: 768px)': { width: '100%' } }}>
              <Text lowContrast>
                • <span style={{ fontWeight: 'bold' }}>Limitamos o tratamento</span> dos dados para as suas devidas finalidades e em <span style={{ fontWeight: 'bold' }}>conformidade com a lei.</span>
              </Text>
            </Card>
          </Flex>

          <Flex gap={8} css={{ '@media (max-width: 768px)': { flexDirection: 'column' } }}>
            <Card height="100%" align="center" padding>
              <Text lowContrast>
                • Os dados completos de seus cartões <span style={{ fontWeight: 'bold' }}>não ficam armazenados em nossas bases</span> e suas transações são feitas com o mais alto padrão de segurança.
              </Text>
            </Card>

            <Card height="100%" align="center" padding>
              <Text lowContrast>
                • Você pode alterar suas preferências de comunicação no próprio aplicativo, <span style={{ fontWeight: 'bold' }}>mas ainda poderemos contatá-lo para informações sobre o seu pedido.</span>
              </Text>
            </Card>

            <Card height="100%" align="center" padding>
              <Text lowContrast>
                • Você poderá tirar suas dúvidas e solicitar informações a qualquer momento através da aba <span style={{ fontWeight: 'bold' }}>Ajuda</span> em nossas plataformas.
              </Text>
            </Card>
          </Flex>

          <Card height="100%" align="center" padding>
            <Text lowContrast>
              • Queremos assegurar que coletamos apenas os <span style={{ fontWeight: 'bold' }}>dados essenciais</span> para otimizar a sua experiência no aplicativo. <span style={{ fontWeight: 'bold' }}>Priorizamos sua privacidade</span>, e todas as informações são tratadas com confidencialidade. Não compartilhamos dados sensíveis e estamos comprometidos em garantir a segurança de suas informações.
            </Text>
          </Card>
        </Flex>
      </Flex>

      <Flex maxWidth={1200} direction="column" width="100%" padding gap={32} flex margin="16px 0 32px">
        <Flex>
          <Heading size="2xl">Como os dados são armazenados?</Heading>
        </Flex>

        <Flex direction="column" flex gap={8}>
          <Flex flex gap={8} css={{ '@media (max-width: 768px)': { flexDirection: 'column' } }}>
            <Card flex padding direction="column" align="center" gap={8} css={{ '@media (max-width: 768px)': { alignItems: 'normal' } }}>
              <Text weight="semi-bold">Onde os dados são armazenados?</Text>

              <Separator />

              <Text lowContrast>
                <span style={{ fontWeight: 'bold' }}>Os dados que coletamos de você são armazenados em serviços de nuvem confiáveis,</span> de parceiros que podem estar localizados no Brasil ou em outros países que ofereçam serviço de armazenamento em nuvem confiáveis e usualmente utilizados por empresas de tecnologia, tais como Estados Unidos da América (EUA) e em países da América Latina e da Europa.
              </Text>
            </Card>

            <Card flex padding direction="column" align="center" gap={8} css={{ '@media (max-width: 768px)': { alignItems: 'normal' } }}>
              <Text weight="semi-bold">
                Por quanto tempo os dados são armazenados
              </Text>

              <Separator />

              <Text lowContrast>
                A ATM EVS armazena as suas informações durante o período necessário para as finalidades apresentadas nos <span style={{ fontWeight: 'bold' }}>Termos e Condições de Uso da ATM EVS</span> e nesta Declaração de Privacidade, respeitando o período de retenção de dados determinado pela legislação aplicável.
              </Text>
            </Card>
          </Flex>

          <Flex flex gap={8} css={{ '@media (max-width: 768px)': { flexDirection: 'column' } }}>
            <Card flex padding direction="column" align="center" gap={8}>
              <Text lowContrast>
                Na contratação desses serviços, a ATM EVS sempre busca empresas que empregam <span style={{ fontWeight: 'bold' }}>alto nível de segurança no armazenamento de suas informações</span>, estabelecendo contratos <span style={{ fontWeight: 'bold' }}>que não violam as definições de privacidade</span> previstas nesta <span style={{ fontWeight: 'bold' }}>Declaração e na legislação aplicável.</span>
              </Text>
            </Card>

            <Card flex padding direction="column" align="center" gap={8}>
              <Text lowContrast>
                Caso você solicite a exclusão de sua conta, os seus dados pessoais fornecidos ao ATM EVS durante a sua utilização dos nossos serviços serão excluídos, salvo para cumprir finalidades permitidas pela <span style={{ fontWeight: 'bold' }}>legislação de proteção de dados.</span>
              </Text>
            </Card>
          </Flex>


        </Flex>

        <Flex flex direction="column" gap={32} margin="0px 0px 100px 0px">
          <Flex flex align="center" justify="center">
            <Heading size="xs">
              Em alguns casos, poderemos reter suas informações  mesmo que você exclua a sua conta, tais como:
            </Heading>
          </Flex>

          <Flex align="center" justify="center" direction="column" flex gap={8}>
            <Flex flex gap={8} css={{ '@media (max-width: 768px)': { flexDirection: 'column' } }}>
              <Card height="100%" align="center" padding>
                <Text lowContrast>
                  • Nas hipóteses de guarda obrigatória de registros previstas em leis aplicáveis;
                </Text>
              </Card>

              <Card height="100%" align="center" padding>
                <Text lowContrast>
                  • Caso houver uma questão não resolvida relacionada à sua conta (como, por exemplo, uma reclamação ou disputa não resolvida);
                </Text>
              </Card>
            </Flex>

            <Flex flex gap={8} css={{ '@media (max-width: 768px)': { flexDirection: 'column' } }}>
              <Card height="100%" padding>
                <Text lowContrast>
                  • Para o exercício regular de nossos direitos;
                </Text>
              </Card>

              <Card height="100%" align="center" padding>
                <Text lowContrast>
                  • Ou ainda caso seja necessário para atender nossos interesses legítimos, como prevenção de fraudes e aprimoramento dos esforços de segurança em benefício dos usuários.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}