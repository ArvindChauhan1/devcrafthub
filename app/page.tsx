import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";
import { TestPost } from '@/constant'

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  const data = await fetchAllProjects(category, endcursor) as ProjectSearch

  // const projectsToDisplay = data?.projectSearch?.edges || [];
  // const projectsToDisplay = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const projectsToDisplay = TestPost;


  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <Categories />

        <p className="no-result-text text-center">No projects found, go create some first.</p>
      </section>
    )
  }

  return (
    <section className="flexStart flex-col paddings mb-16">
      <Categories />

      <section className="projects-grid">
        {projectsToDisplay.map((node) => {
          console.log(node,"gg")
          return (
            <ProjectCard
              key={`${node?.id}`}
              id={node?.id}
              image={node?.image}
              title={node?.title}
              name={node?.createdBy.name}
              avatarUrl={node?.createdBy.avatarUrl}
              userId={node?.createdBy.id}
              // key={`${Math.random() * 10}`}
              // id={String(Math.random() * 10)}
              // image={"https://picsum.photos/200"}
              // title={"test"}
              // name={"test user"}
              // avatarUrl={"https://picsum.photos/200"}
              // userId={node?.createdBy.id}
            />
          )
        })}
      </section>

      <LoadMore
        startCursor={data?.projectSearch?.pageInfo?.startCursor}
        endCursor={data?.projectSearch?.pageInfo?.endCursor}
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
      />
    </section>
  )
};

export default Home;
