declare module "*.graphql" {
	import { DocumentNode } from "graphql";
	const value: DocumentNode;
	export = value;
}

declare module "*.gql" {
	import { DocumentNode } from "graphql";
	const value: DocumentNode;
	export = value;
}

//declare module "vue/types/vue" {
//	interface Vue {
//		// $style: { [key: string]: string }
//		$style: any;
//	}
//}
