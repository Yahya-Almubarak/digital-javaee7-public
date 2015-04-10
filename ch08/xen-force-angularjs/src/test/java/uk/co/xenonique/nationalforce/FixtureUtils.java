/*******************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2013,2014 by Peter Pilgrim, Addiscombe, Surrey, XeNoNiQUe UK
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU GPL v3.0
 * which accompanies this distribution, and is available at:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * Developers:
 * Peter Pilgrim -- design, development and implementation
 *               -- Blog: http://www.xenonique.co.uk/blog/
 *               -- Twitter: @peter_pilgrim
 *
 * Contributors:
 *
 *******************************************************************************/

package uk.co.xenonique.nationalforce;

import uk.co.xenonique.nationalforce.entity.CaseRecord;
import uk.co.xenonique.nationalforce.entity.Task;

import java.util.Date;
import java.util.Random;

/**
 * The type FixtureUtils
 *
 * @author Peter Pilgrim (peter)
 */
public final class FixtureUtils {
    private static Random rnd = new Random(System.currentTimeMillis());

    public static CaseRecord createProjectAndTasks( int taskCount ) {
        return createProjectAndTasks(
                "xenonique"+Integer.toString((int) (1000 + rnd.nextDouble() * 9000.0)), taskCount);
    }

    public static CaseRecord createProjectAndTasks( String name, int taskCount ) {
        final CaseRecord caseRecord = new CaseRecord(name);
        caseRecord.setHeadline("headline"+Integer.toString((int) (100 + rnd.nextDouble() * 900.0)));
        caseRecord.setDescription("description"+Integer.toString((int) (100 + rnd.nextDouble() * 900.0)));
        for ( int j=0; j<taskCount; ++j) {
            Date targetDate = null;
            if ( j > 0 ) {
                targetDate = new Date(System.currentTimeMillis() +
                        (long)((int)(Math.random() * 7 + 1) * 86400 * 1000 ));
            }
            final Task task = new Task("task"+(j+1)*2, targetDate, false );
            caseRecord.addTask(task);
            task.setCaseRecord(caseRecord);
        }
        return caseRecord;
    }

}
