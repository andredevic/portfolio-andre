import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsAbout = () => {
  return (
    <Tabs
      defaultValue="account"
      className="flex flex-col bg-transparent  2xl:w-[600px] "
    >
      <TabsList className=" bg-transparent  text-white">
        <TabsTrigger className="px-8 font-bold" value="account">
          Perfil Profissional
        </TabsTrigger>
        <TabsTrigger className="px-8 font-bold " value="password">
          Qualificações
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="my-1 max-w-4xl py-2  font-light tracking-tight leading-loose text-lg ">
          Sou um desenvolvedor Full Stack em formação, comprometido em
          transformar ideias em soluções eficientes e funcionais. Desde que
          ingressei na faculdade, venho me dedicando a cursos extracurriculares
          e projetos práticos para conquistar minha primeira oportunidade na
          área de tecnologia. Tenho experiência no desenvolvimento frontend com
          React e no backend com APIs REST e GraphQL, além de conhecimentos em
          bancos de dados relacionais e não relacionais. Possuo facilidade de
          aprendizado, boa comunicação e estou sempre disposto a adquirir novas
          habilidades com empenho e dedicação, buscando criar soluções modernas
          e de impacto.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="my-1 max-w-4xl py-4 font-light tracking-wider text-lg ">
          <span className="text-violet-500 font-bold">Frontend:</span> <br />
          Tenho conhecimento em React, com experiência no uso de hooks e noções
          básicas de Next.js, o que me permite criar páginas interativas e
          responsivas. Também possuo experiência com Tailwind CSS e Shadcn,
          permitindo a criação de interfaces eficientes e modernas.
        </p>
        <div className="w-full h-[1px] bg-gray-500 "></div>
        <p className="my-1 max-w-4xl py-4 font-light tracking-wider text-lg ">
          <span className="text-violet-500  font-bold">Backend:</span> <br />
          Sou familiarizado com Node.js e Express.js, sendo capaz de criar
          servidores e manipular rotas. Tenho uma compreensão inicial de
          técnicas de autenticação de usuários, como o uso de JWT, e sou capaz
          de desenvolver APIs RESTful. Além disso, tenho habilidade em construir
          soluções escaláveis e de alto desempenho.
        </p>
        <div className="w-full h-[1px] bg-gray-500 "></div>
        <p className="my-1 max-w-4xl py-4 font-light tracking-wider text-lg ">
          <span className="text-violet-500  font-bold">Banco de Dados:</span>
          <br /> Tenho conhecimento em PostgreSQL, trabalhando com bancos de
          dados relacionais, e experiência com MongoDB, permitindo manipular
          dados não estruturados de maneira flexível.
        </p>
        <div className="w-full h-[1px] bg-gray-500"></div>
        <p className="my-1 max-w-4xl py-4 font-light tracking-wider text-lg ">
          <span className="text-violet-500  font-bold">Idioma:</span>
          <br /> Inglês: Intermediário
        </p>
      </TabsContent>
    </Tabs>
  );
};

export default TabsAbout;
