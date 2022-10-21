declare module "@windicss/plugin-heropatterns";
declare module "@windicss/plugin-animations";

declare module "*.gql" {
	import { DocumentNode } from "graphql";
	const Schema: DocumentNode;
	export = Schema;
}

declare module "*.graphql" {
	import { DocumentNode } from "graphql";

	const content: DocumentNode;
	export default content;
}
