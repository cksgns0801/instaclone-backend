import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProfile(
      firstName: String
	@@ -14,6 +10,6 @@ export default gql`
      password: String
      bio: String
      avatar: Upload
    ): MutationResponse!
  }
`;