import prismaClient from "../prisma";

class createReactionService {
    async create(reaction: string){
        const reactionEmoji = await prismaClient.emoji.create({
            data: {
                reaction
            }
        });

        return reactionEmoji;
    }
}

export { createReactionService }