// import { DisableNotificationsPayload } from "@rallly/backend";
// import { decryptToken } from "@rallly/backend/session";
// import { prisma } from "@rallly/database";
import { GetServerSideProps as GetServerSidePropsNext } from "next";

// import { getServerSession } from "@/utils/auth";

const Page = () => {
  return null;
};

export default Page;

export const getServerSideProps: GetServerSidePropsNext = async (ctx) => {
  // const token = ctx.query.token?.toString() as string;
  // const session = await getServerSession(ctx.req, ctx.res);

  // if (!session || session.user.email === null) {
  //   return {
  //     props: {},
  //     redirect: {
  //       destination:
  //         "/login?callbackUrl=" +
  //         encodeURIComponent(ctx.req.url?.toString() ?? "/"),
  //     },
  //   };
  // }

  // if (session && token) {
  //   const payload = await decryptToken<DisableNotificationsPayload>(token);
  //   if (payload) {
  //     const watcher = await prisma.watcher.findFirst({
  //       where: {
  //         userId: session.user.id,
  //         pollId: payload.pollId,
  //       },
  //     });

  //     if (watcher) {
  //       await prisma.watcher.delete({
  //         where: {
  //           id: watcher.id,
  //         },
  //       });
  //     }

  //     return {
  //       props: {},
  //       redirect: {
  //         destination: `/poll/${payload.pollId}`,
  //       },
  //     };
  //   }
  // }

  return {
    props: {},
    notFound: true,
  };
};
